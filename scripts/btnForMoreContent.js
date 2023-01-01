
class BtnForLoad {
    constructor(root, data, callbackWhenSomebodyClickOnButton) {
        this.root = root;
        this.callbackWhenSomebodyClickOnButton = callbackWhenSomebodyClickOnButton;
        this.data = data;
        this.button();
        this.buttonLogic();
    }

    // надо изменить порядок загрузки елементов, что бы кнопка была после коментариев!!!

    button() {
        console.log('<<>>', 'btn for load', this.data);
        this.element = document.createElement('button');
        this.element.classList.add('load-button');
        this.element.textContent = 'Load More';
        this.root.append(this.element);
    }

    buttonLogic() {
        console.log('load More btn')
        this.element.addEventListener('click', () => {  
           this.callbackWhenSomebodyClickOnButton();
        });
    }
}

