const blocks = document.querySelectorAll(".parallax-block");

blocks.forEach(block => {
    const box = block.querySelector(".boxx"); // Select the entire box
    const movingValue =  0.4; // Adjust this for intensity

    block.addEventListener("mousemove", parallax);
    
    function parallax(e) {
        const rect = block.getBoundingClientRect();
        const x = e.clientX - rect.left; // X position within the block
        const y = e.clientY - rect.top; // Y position within the block

        // Calculate movement based on mouse position and data-value
        const moveX = (x * movingValue);
        const moveY = (y * movingValue);

        // Apply transformation to the whole box
        box.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
    }

    // Reset the box position when the cursor leaves the block
    block.addEventListener("mouseleave", () => {
        box.style.transform = "translate(0, 0) scale(1)";
    });
});
