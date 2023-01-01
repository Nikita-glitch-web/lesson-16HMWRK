class BtnForClear {
    constructor(root, data, callbackWhenSomebodyClickOnButton) {
        this.root = root;
        this.callbackWhenSomebodyClickOnButton = callbackWhenSomebodyClickOnButton;
        this.data = data;
        this.clearButton();
        this.clearButtonLogic();
    }
    
    clearButton() {
        console.log('<<>>', 'btn for clear', this.data);
        this.element = document.createElement('button');
        this.element.classList.add('delete-btn');
        this.element.textContent = 'Delete';
        this.root.append(this.element);  
    }

    clearButtonLogic() {
        console.log('clear btn')
        this.element.addEventListener('click', () => {  
           this.callbackWhenSomebodyClickOnButton();
        });
    }
}