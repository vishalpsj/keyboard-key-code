let inputValue = document.getElementById('inputValue')

        let keyPressed = document.querySelector('.keyPressed')
        let keyCode = document.querySelector('.keyCode')
        let charCode = document.querySelector('.charCode')
        let eventType = document.querySelector('.eventType')



        const handleKeyPress = (event) => {
            inputValue.value = ""
            keyPressed.textContent = `Key pressed : ${event.key}`
            keyCode.textContent = `Key Code : : ${event.keyCode}`
            charCode.textContent = `Character code : ${event.code}`
            eventType.textContent = `Event Type : ${event.type}`
        }

        inputValue.addEventListener('keydown', handleKeyPress)