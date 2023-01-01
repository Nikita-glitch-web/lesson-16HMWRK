
const formTemplate = `
<div class="add-comment-form__field">
<input 
   type="text"
   name="author"
   class="add-comment-form__native-input"
   placeholder="Name"
/>
<img src="" alt="" class="add-comment-form__preview">
</div>
<div class="add-comment-form__field">
<input 
   type="text"
   name="title"
   class="add-comment-form__native-input"
   placeholder="Title"
/>
</div>
<div class="add-comment-form__field">
<input 
   type="text"
   name="description"
   class="add-comment-form__native-input"
   placeholder="Your comment"
/>
</div>
<div class="add-comment-form__field">
</div>
<div class="add-comment-form__field">
<button class="add-comment-form__btn add-commetn-form__btn_submit">
    Add
</button>
<button class="add-comment-form__btn add-commetn-form__btn_submit">
    Clear
</button>
</div>
`;


class AddComentForm {
    constructor(root, url, onSuccses) {
        this.url = url;
        this.root = root;
        this.onSuccses = onSuccses;
        this.newForm();
        this.eventsWatcher();
    }

    newForm() {
        this.form = document.createElement('form');
        this.form.classList.add('add-comment-form');
        this.form.innerHTML = formTemplate;
        this.root.append(this.form);
        this.previewImg = this.form.querySelector('.add-comment-form__preview');
        this.fileUploadBtn = this.form.querySelector('.add-comment-form__btn add-comment-form__btn_upload');       
    };

    eventsWatcher() {
        this.form.addEventListener('submit', (e) => {
            debugger  
            e.preventDefault();
            const requestData = new FormData(this.form);
            console.log(requestData);
            fetch(this.url, {
                method: 'POST',
                body: requestData
            })
            .then(res => res.json())
            .then((data) => {
                this.onSuccses(data);
                console.log();
            });
        });
    }
};

