(function () {
    let elementUIDs = new WeakMap();
    let classCounter = new Map();

    const DEFAULT_TARGETED_TAGS = ["div", "span", "p"];
    const DEFAULT_EXCLUDED_TAGS = ["script", "style"];

    let targetedTags = [...DEFAULT_TARGETED_TAGS];
    let excludedTags = [...DEFAULT_EXCLUDED_TAGS];

    function generateReadableClass(element) {
        let tag = element.tagName.toLowerCase();
        
        if (!classCounter.has(tag)) {
            classCounter.set(tag, 1);
        } else {
            classCounter.set(tag, classCounter.get(tag) + 1);
        }

        return `unique-${tag}-${classCounter.get(tag)}`;
    }

    function assignUniqueClass(element) {
        if (!elementUIDs.has(element)) {
            let readableClass = generateReadableClass(element);
            elementUIDs.set(element, readableClass);
            element.classList.add(readableClass);
        }
    }

    function assignUniqueClasses() {
        document.querySelectorAll(targetedTags.join(",")).forEach(assignUniqueClass);
    }

    assignUniqueClasses();

    let observer = new MutationObserver((mutations) => {
        // Use requestIdleCallback if available, otherwise fallback to setTimeout
        (window.requestIdleCallback || function (cb) { setTimeout(cb, 0); })(() => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1 && !excludedTags.includes(node.tagName.toLowerCase())) {
                        assignUniqueClass(node);
                    }
                });
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    window.Unique = {
        addTargetTags: function (...tags) {
            tags.forEach(tag => {
                if (!targetedTags.includes(tag.toLowerCase())) {
                    targetedTags.push(tag.toLowerCase());
                }
            });
            assignUniqueClasses();
        },
        excludeTags: function (...tags) {
            tags.forEach(tag => {
                if (!excludedTags.includes(tag.toLowerCase())) {
                    excludedTags.push(tag.toLowerCase());
                }
            });
        },
        resetTargetTags: function () {
            targetedTags = [...DEFAULT_TARGETED_TAGS];
            assignUniqueClasses();
        },
        resetExcludedTags: function () {
            excludedTags = [...DEFAULT_EXCLUDED_TAGS];
        }
    };

})();
