### PopupPro - Customizable Popup Library 🚀
![Thumnail shape](https://github.com/user-attachments/assets/40886671-aa73-4f32-bd7d-914f2b4e7b69)

**Repository:** [PopupPro](https://github.com/BOSS294/PopupPro) 🌟

**Description:**

PopupPro is a modern, highly customizable JavaScript library designed to enhance user interactions with versatile and stylish popups. It goes beyond traditional popup libraries with its extensive feature set, including flexible configurations, smooth animations, and rich styling options. Whether you need a simple alert or a complex modal with various buttons, PopupPro provides an intuitive way to create engaging and visually appealing popups for your web applications. ✨

---

### Features 🌟

1. **Customizable Options:**
   - **Title & Message:** Easily set the title and message of the popup. 📝
   - **Background Color & Text Color:** Fully customizable colors for a tailored look. 🎨
   - **Size & Styling:** Adjustable width, height, and border radius to match your design. 📏
   - **Close Button:** Option to include or exclude the close button. ❌

2. **Animation Support:**
   - **Built-in Animations:** Choose from pre-defined animations like `bounce`, or create custom animations. 🕺
   - **Animation Duration:** Fine-tune animation timing for a smooth experience. ⏳

3. **Button Configuration:**
   - **Multiple Buttons:** Support for multiple buttons with customizable text. 🔘
   - **Button Styling:** Style buttons with different colors, borders, and hover effects. 🎨
   - **Button Actions:** Define actions and redirection URLs for each button. 🌐

4. **Responsive and Accessible:**
   - **Responsive Design:** Designed to work well on various screen sizes and devices. 📱💻
   - **Accessibility:** Focus management and overlay click handling for improved accessibility. ♿

5. **Error Handling:**
   - **Error Reporting:** In-built error handling with console logging and alerts. ⚠️

---

### How PopupPro Stands Out 🌟

**1. Extensive Customization:** Unlike many popup libraries, PopupPro allows granular control over virtually every aspect of the popup, including animation types, button styles, and overall design. This level of customization ensures that your popups can be tailored to fit seamlessly into any design.

**2. Animation Flexibility:** While many popup modules offer basic fade-in/fade-out animations, PopupPro supports a variety of animations, including custom animations, to create engaging and dynamic user experiences. You can choose from built-in animations like `bounce` or define your own.

**3. Versatile Button Configuration:** PopupPro supports multiple buttons with diverse configurations. Each button can have its own text, style, action, and optional redirection URL, making it possible to handle complex user interactions within a single popup.

**4. Focus on Accessibility:** PopupPro emphasizes accessibility with features like focus management and overlay click handling, ensuring that your popups are usable by everyone, including users with disabilities.

**5. Error Handling and Debugging:** The library includes comprehensive error handling with console logging and alert notifications, simplifying the debugging process and improving reliability.

**6. Clean and Modern Design:** The default styling of PopupPro is modern and clean, providing a professional appearance out of the box. It also offers extensive styling options to match your specific design needs.

**7. Responsive Design:** PopupPro is designed to adapt to various screen sizes, ensuring that your popups look great on both mobile and desktop devices.

---

### About the Developer 👨‍💻

**Developer:** [Mayank Chawdhari](https://github.com/BOSS294) 🌟

Mayank Chawdhari is a dedicated and innovative web developer with a focus on creating elegant and user-friendly web applications. With expertise in JavaScript, CSS, and PHP, Mayank brings a passion for clean code and exceptional user experiences. Known for delivering high-quality solutions and continually exploring new technologies, Mayank is committed to advancing the field of web development and enhancing user interactions. 🚀💡

---

### Usage 📚

**1. Include the Library:**

Download `PopupPro.js` from this repository or include it directly in your project. Add the following script tag to your HTML file:

```html
<script src="path/to/PopupPro.js"></script>
```

**2. Basic Popup Example:**

Add a button to your HTML and configure the popup with JavaScript:

```html
<button onclick="PopupPro.show({
    title: 'Login Authentication',
    message: 'Wrong password or username, Please try again',
    backgroundColor: '#333',
    textColor: '#fff',
    width: '400px',
    borderRadius: '20px',
    buttons: [
        {
            text: 'Retry',
            style: 'default',
            onClick: function() { console.log('Retry button clicked'); }
        },
        {
            text: 'Cancel',
            style: 'default',
            onClick: function() { console.log('Cancel button clicked'); }
        }
    ]
})">Show Popup</button>
```

**3. Configuration Options:**

- **`title`**: Title of the popup. 🏷️
- **`message`**: Message text displayed in the popup. 🗨️
- **`backgroundColor`**: Background color of the popup container. 🎨
- **`textColor`**: Color of the text. 🖋️
- **`width`**: Width of the popup container. 📐
- **`height`**: Height of the popup container (optional). 📏
- **`borderRadius`**: Border radius for rounded corners. 🧩
- **`closeButton`**: Boolean value to show or hide the close button. ❌
- **`animationDuration`**: Duration of the popup animation. ⏳
- **`animation`**: Animation type (e.g., `bounce`). 🕺
- **`buttons`**: Array of button configurations, including text, style, click action, and optional redirection URL. 🔘

**4. Handling Button Actions:**

Each button can be configured with a `text`, `style`, `onClick` function, and optional `redirect` URL. The popup will close automatically after the button is clicked unless specified otherwise. 🚪

**5. Advanced Usage:**

To customize the default settings, use the `setOptions` method:

```javascript
PopupPro.setOptions({
    animationDuration: '0.5s',
    backgroundColor: '#f0f0f0',
    buttons: [{ text: 'Confirm', onClick: function() { /* custom action */ } }]
});
```

**6. Error Handling:**

If an error occurs, it will be logged to the console and displayed in an alert dialog for quick debugging. 🛠️

---

### Contributing 🤝

Contributions are welcome! Please open issues, submit suggestions, or create pull requests. For detailed guidelines, refer to the `CONTRIBUTING.md` file in the repository. 📝

---

### License 📜

This project is licensed under the MIT License. See the `LICENSE` file for more details. 🔓

For further support or questions, please open an issue on the [GitHub repository](https://github.com/BOSS294/PopupPro). 💬
