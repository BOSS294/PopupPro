(function(global) {
    const PopupPro = {
        defaultOptions: {
            title: 'Default Title',
            message: 'This is a default message.',
            backgroundColor: '#fff',
            textColor: '#000',
            width: '400px',
            height: 'auto',
            borderRadius: '8px',
            closeButton: true,
            animationDuration: '0.3s',
            animation: 'bounce',
            buttons: [
                {
                    text: 'OK',
                    style: 'default',
                    onClick: function() { console.log('OK button clicked'); },
                    redirect: null
                }
            ]
        },

        show: function(options) {
            const settings = { ...this.defaultOptions, ...options };

            const popupOverlay = document.createElement('div');
            Object.assign(popupOverlay.style, {
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: '9999',
                transition: `opacity ${settings.animationDuration} ease`,
                opacity: '0'
            });
            document.body.appendChild(popupOverlay);

            const popupContainer = document.createElement('div');
            Object.assign(popupContainer.style, {
                backgroundColor: settings.backgroundColor,
                color: settings.textColor,
                padding: '20px',
                borderRadius: settings.borderRadius,
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                width: settings.width,
                height: settings.height,
                maxWidth: '90%',
                position: 'relative',
                animation: `${settings.animation} ${settings.animationDuration}`
            });

            const popupTitle = document.createElement('h2');
            popupTitle.innerText = settings.title;
            popupTitle.style.marginTop = '0';
            popupContainer.appendChild(popupTitle);

            const popupMessage = document.createElement('p');
            popupMessage.innerText = settings.message;
            popupContainer.appendChild(popupMessage);

            if (settings.closeButton) {
                const closeButton = document.createElement('span');
                closeButton.innerHTML = '&times;';
                Object.assign(closeButton.style, {
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    cursor: 'pointer',
                    fontSize: '20px'
                });
                closeButton.addEventListener('click', () => this.hide(popupOverlay));
                popupContainer.appendChild(closeButton);
            }

            const buttonContainer = document.createElement('div');
            Object.assign(buttonContainer.style, {
                marginTop: '20px',
                textAlign: 'right'
            });

            settings.buttons.forEach(btn => {
                const button = document.createElement('button');
                button.innerText = btn.text;
                Object.assign(button.style, {
                    padding: '10px 20px',
                    marginLeft: '10px',
                    border: '2px solid black',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    backgroundColor: '#fff',
                    color: '#000',
                    fontSize: '0.9em',
                    transition: 'background-color 0.3s, color 0.3s, border 0.3s'
                });

                button.addEventListener('mouseover', () => {
                    Object.assign(button.style, {
                        backgroundColor: '#000',
                        color: '#fff',
                        border: '2px solid #fff'
                    });
                });

                button.addEventListener('mouseout', () => {
                    Object.assign(button.style, {
                        backgroundColor: '#fff',
                        color: '#000',
                        border: '2px solid black'
                    });
                });

                button.addEventListener('click', () => {
                    btn.onClick();
                    this.hide(popupOverlay);
                    if (btn.redirect) window.location.href = btn.redirect;
                });

                buttonContainer.appendChild(button);
            });

            popupContainer.appendChild(buttonContainer);
            popupOverlay.appendChild(popupContainer);

            setTimeout(() => {
                popupOverlay.style.opacity = '1';
            }, 10);

            popupOverlay.addEventListener('click', (e) => {
                if (e.target === popupOverlay) {
                    this.hide(popupOverlay);
                }
            });

            popupContainer.setAttribute('tabindex', '-1');
            popupContainer.focus();
        },

        hide: function(popupOverlay) {
            popupOverlay.style.opacity = '0';
            setTimeout(() => {
                if (popupOverlay.parentNode) {
                    popupOverlay.parentNode.removeChild(popupOverlay);
                }
            }, parseFloat(this.defaultOptions.animationDuration) * 1000);
        },

        setOptions: function(options) {
            this.defaultOptions = { ...this.defaultOptions, ...options };
        },

        handleError: function(error, code) {
            console.error(`Error [${code}]: ${error.message}`);
            alert(`Error: ${error.message}`);
        }
    };

    global.PopupPro = PopupPro;
})(window);
