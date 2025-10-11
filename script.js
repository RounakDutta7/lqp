'use strict';

const card = document.querySelector('.question-card');

// Local database of LeetCode questions
const questionsDB = {
    Easy: {
        Array: [
            { title: "Two Sum", acRate: 49.5, titleSlug: "two-sum" },
            { title: "Remove Duplicates from Sorted Array", acRate: 53.2, titleSlug: "remove-duplicates-from-sorted-array" },
            { title: "Best Time to Buy and Sell Stock", acRate: 54.8, titleSlug: "best-time-to-buy-and-sell-stock" },
            { title: "Majority Element", acRate: 64.2, titleSlug: "majority-element" },
            { title: "Contains Duplicate", acRate: 61.3, titleSlug: "contains-duplicate" }
        ],
        String: [
            { title: "Valid Palindrome", acRate: 47.2, titleSlug: "valid-palindrome" },
            { title: "Valid Anagram", acRate: 63.8, titleSlug: "valid-anagram" },
            { title: "Longest Common Prefix", acRate: 42.1, titleSlug: "longest-common-prefix" },
            { title: "Reverse String", acRate: 78.5, titleSlug: "reverse-string" }
        ],
        "Linked List": [
            { title: "Reverse Linked List", acRate: 73.4, titleSlug: "reverse-linked-list" },
            { title: "Merge Two Sorted Lists", acRate: 62.8, titleSlug: "merge-two-sorted-lists" },
            { title: "Linked List Cycle", acRate: 48.9, titleSlug: "linked-list-cycle" }
        ],
        Tree: [
            { title: "Maximum Depth of Binary Tree", acRate: 75.2, titleSlug: "maximum-depth-of-binary-tree" },
            { title: "Same Tree", acRate: 60.1, titleSlug: "same-tree" },
            { title: "Invert Binary Tree", acRate: 75.8, titleSlug: "invert-binary-tree" }
        ],
        Random: [
            { title: "Two Sum", acRate: 49.5, titleSlug: "two-sum" },
            { title: "Valid Palindrome", acRate: 47.2, titleSlug: "valid-palindrome" },
            { title: "Reverse Linked List", acRate: 73.4, titleSlug: "reverse-linked-list" },
            { title: "Maximum Depth of Binary Tree", acRate: 75.2, titleSlug: "maximum-depth-of-binary-tree" },
            { title: "Climbing Stairs", acRate: 52.3, titleSlug: "climbing-stairs" }
        ]
    },
    Medium: {
        Array: [
            { title: "3Sum", acRate: 33.2, titleSlug: "3sum" },
            { title: "Product of Array Except Self", acRate: 65.4, titleSlug: "product-of-array-except-self" },
            { title: "Container With Most Water", acRate: 54.1, titleSlug: "container-with-most-water" },
            { title: "Find First and Last Position", acRate: 42.8, titleSlug: "find-first-and-last-position-of-element-in-sorted-array" }
        ],
        String: [
            { title: "Longest Substring Without Repeating Characters", acRate: 34.5, titleSlug: "longest-substring-without-repeating-characters" },
            { title: "Longest Palindromic Substring", acRate: 33.7, titleSlug: "longest-palindromic-substring" },
            { title: "Group Anagrams", acRate: 68.9, titleSlug: "group-anagrams" }
        ],
        "Linked List": [
            { title: "Add Two Numbers", acRate: 42.1, titleSlug: "add-two-numbers" },
            { title: "Remove Nth Node From End of List", acRate: 43.2, titleSlug: "remove-nth-node-from-end-of-list" },
            { title: "Reorder List", acRate: 58.3, titleSlug: "reorder-list" }
        ],
        Tree: [
            { title: "Binary Tree Level Order Traversal", acRate: 65.8, titleSlug: "binary-tree-level-order-traversal" },
            { title: "Validate Binary Search Tree", acRate: 32.5, titleSlug: "validate-binary-search-tree" },
            { title: "Kth Smallest Element in a BST", acRate: 71.2, titleSlug: "kth-smallest-element-in-a-bst" }
        ],
        "Dynamic Programming": [
            { title: "Coin Change", acRate: 43.2, titleSlug: "coin-change" },
            { title: "Longest Increasing Subsequence", acRate: 54.1, titleSlug: "longest-increasing-subsequence" },
            { title: "Word Break", acRate: 46.8, titleSlug: "word-break" }
        ],
        Random: [
            { title: "3Sum", acRate: 33.2, titleSlug: "3sum" },
            { title: "Longest Substring Without Repeating Characters", acRate: 34.5, titleSlug: "longest-substring-without-repeating-characters" },
            { title: "Add Two Numbers", acRate: 42.1, titleSlug: "add-two-numbers" },
            { title: "Binary Tree Level Order Traversal", acRate: 65.8, titleSlug: "binary-tree-level-order-traversal" }
        ]
    },
    Hard: {
        Array: [
            { title: "Median of Two Sorted Arrays", acRate: 38.2, titleSlug: "median-of-two-sorted-arrays" },
            { title: "Trapping Rain Water", acRate: 60.1, titleSlug: "trapping-rain-water" },
            { title: "First Missing Positive", acRate: 37.5, titleSlug: "first-missing-positive" }
        ],
        String: [
            { title: "Minimum Window Substring", acRate: 41.2, titleSlug: "minimum-window-substring" },
            { title: "Valid Number", acRate: 19.8, titleSlug: "valid-number" },
            { title: "Word Ladder", acRate: 38.9, titleSlug: "word-ladder" }
        ],
        "Linked List": [
            { title: "Merge k Sorted Lists", acRate: 52.3, titleSlug: "merge-k-sorted-lists" },
            { title: "Reverse Nodes in k-Group", acRate: 58.7, titleSlug: "reverse-nodes-in-k-group" }
        ],
        Tree: [
            { title: "Binary Tree Maximum Path Sum", acRate: 40.2, titleSlug: "binary-tree-maximum-path-sum" },
            { title: "Serialize and Deserialize Binary Tree", acRate: 57.8, titleSlug: "serialize-and-deserialize-binary-tree" }
        ],
        "Dynamic Programming": [
            { title: "Edit Distance", acRate: 55.3, titleSlug: "edit-distance" },
            { title: "Regular Expression Matching", acRate: 28.5, titleSlug: "regular-expression-matching" },
            { title: "Longest Valid Parentheses", acRate: 34.2, titleSlug: "longest-valid-parentheses" }
        ],
        Random: [
            { title: "Median of Two Sorted Arrays", acRate: 38.2, titleSlug: "median-of-two-sorted-arrays" },
            { title: "Minimum Window Substring", acRate: 41.2, titleSlug: "minimum-window-substring" },
            { title: "Merge k Sorted Lists", acRate: 52.3, titleSlug: "merge-k-sorted-lists" }
        ]
    },
    Random: {}
};

// Populate Random difficulty with all questions
questionsDB.Random = {
    ...questionsDB.Easy,
    ...questionsDB.Medium,
    ...questionsDB.Hard
};

const getJson = async () => {
    // get difficulty
    const diff = document.querySelector(
        'input[name="difficulty_radio_button"]:checked'
    ).value;
    // get topic
    const topic = document.querySelector('select[name="topic"]').value;

    try {
        let questions = [];
        
        // Get questions based on difficulty and topic
        if (diff === 'Random') {
            // Get random questions from all difficulties
            const allQuestions = [
                ...questionsDB.Easy.Random,
                ...questionsDB.Medium.Random,
                ...questionsDB.Hard.Random
            ];
            questions = allQuestions;
        } else if (topic === 'Random') {
            // Get all questions for the selected difficulty
            const difficultyQuestions = questionsDB[diff];
            questions = Object.values(difficultyQuestions).flat();
        } else {
            // Get questions for specific difficulty and topic
            questions = questionsDB[diff][topic] || questionsDB[diff].Random || [];
        }

        if (questions.length > 0) {
            // Pick a random question
            const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
            
            document.getElementById('title').innerHTML = randomQuestion.title;
            document.getElementById('acRate').innerHTML = randomQuestion.acRate.toFixed(2) + '%';
            document.getElementById('link').href = `https://leetcode.com/problems/${randomQuestion.titleSlug}`;

            // display the question
            if (card.classList.contains('hidden-card'))
                card.classList.remove('hidden-card');
        } else {
            alert('No questions available for the selected criteria. Please try different options.');
        }
    } catch (error) {
        console.error('Error selecting question:', error);
        alert('An error occurred. Please try again.');
    }
};

function myFunction() {
    const myVar = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('myDiv').style.display = 'block';
}

let getQuestion = document.querySelector('.get-question-button');
getQuestion.addEventListener('click', () => getJson());
