/**
 * Создавать екземпляр класса AddCommentForm(new AddCommentsForm())
 * Надо где-то fetch использовать, наверное в renderList 
 */


class CommentsPage {
    constructor(root, url) {
        this.root = root;
        this.url = url;
        this.comments = [];
        this.page = 0;
        this.deletePage = 5;
        this.limit = 5;
        this.renderForm();
        this.listContainer = document.createElement('div');
        this.root.append(this.listContainer);
        this.fetchList();
        this.renderButton();
    }

    renderStructure() {
        this.formContainer = document.createElement('div');
    }

    renderForm() {
        this.formContainer = document.createElement('div');
        this.commentsPageList = document.createElement('div');
        this.formContainer.classList.add('form-container');
        this.commentsPageList.classList.add('comments-page__list')
        const onSuccessCallback = (newComment) => {
            console.log(newComment);
            this.listContainer.innerHTML = ``;
            this.comments.push();
            this.comments.unshift(newComment);
            this.renderList();
            this.deleteRenderList();
            // додаті до массіва комментс
            // свторіті метод якій буде додаваті один Comment
        }

        this.form = new AddComentForm(this.formContainer, this.url, onSuccessCallback);
        this.root.append(this.formContainer);
    }

    renderOne(commentData) {
        console.log('render one')
        const item = new Comment(this.listContainer, commentData);
    }

    fetchList() {
        console.log('Fetch List', this)
        fetch(`${this.url}?_order=desc&_sort=id&_limit=${this.limit}&_page=${this.page}`).then((res) => res.json()).then(data => {
            this.comments = data;
            this.renderList();
            this.deleteRenderList();
        })
    }

    renderList()  {
        console.log('TUT NAPIST LOGICU DLYA POLUCHENIA SPISKA')      
        for(let i = 0; i < this.comments.length; i++) {
            const item = new Comment(this.listContainer, this.comments[i]);  
        }
    }

    deleteRenderList() {
        console.log('TUT NAPIST LOGICU DLYA UDALENIA SPISKA', this.page);
        for(let i = 5; i > this.comments.length; i--) {
            const item = new Comment(this.listContainer, this.comments[i]);
        }
    }

    // написать функцию типо рендерлист на отнимания

    nextPage() {
        this.page += 1;
        fetch(`${this.url}?_order=desc&_sort=id&_limit=${this.limit}&_page=${this.page}`).then((res) => res.json()).then(data => {
            this.comments = data;
            this.listContainer.innerHTML = ``;
            this.renderList();
        })
        console.log('TUT SDELAY ZAPROS NA SERVER CHTOBY POLUCHIT NOWIE DANNYE', this.page);
    };

    previousPage() {
        this.deletePage = -1;
        fetch(`${this.url}?_order=desc&_sort=id&_limit=${this.limit}&_page=${this.page}`).then((res) => res.json()).then(data => {
            this.comments = data;
            this.listContainer.innerHTML = ``;
            this.deleteRenderList();  
        })
    console.log('previous page', this.page);
    }

    renderButton() {
        this.loadBtn = new BtnForLoad(this.root, API_URL, () => {
        this.nextPage();
        });
        this.clearBtn = new BtnForClear(this.root, API_URL, () => {
        this.previousPage();
        });  
    }
}

