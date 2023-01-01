

class Comment {
    constructor(root, data) {
        this.root = root;
        this.data= data;
        this.render();
        
    }

    render() {
        console.log('>>>>>>>', this.data)
        this.container = document.createElement('div');
        this.container.classList.add('add-post');
        this.container.id = this.root.id;
        this.container.innerHTML = `
            <h2 class="add-title">${this.data.title}</h2>
            <p class="add-description">${this.data.description}</p>
            <div class="add-note">${this.data.author}</div>
            <img width="180" src="${this.data.img}" class="add-img" alt="">
        `;
        this.root.append(this.container);
    }

}

