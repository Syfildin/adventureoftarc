
// Example story object, with image references removed
const story = {
    start: {
        title: "Start of the Journey",
        description: "You find yourself at the edge of a dark forest.",
        // img: "images/start.jpg", // This line would be removed or commented out
        choices: [
            {text: "Enter the forest", goTo: "forest"},
            {text: "Walk around it", goTo: "path"}
        ]
    },
    // More scenes would follow, all without image references
};

function displayScene(scene) {
    const sceneTitle = document.getElementById('scene-title');
    const sceneDescription = document.getElementById('scene-description');
    // Removed code for setting image source
    sceneTitle.innerText = story[scene].title;
    sceneDescription.innerText = story[scene].description;
    // Update choices for the current scene
}

// Initial display
displayScene('start');
