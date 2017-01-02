import {
    Component,
    OnDestroy,
    AfterViewInit,
    EventEmitter,
    Input,
    Output
} from '@angular/core';

@Component({
    selector: 'simple-tiny',
    template: `<textarea id="{{elementId}}"></textarea>`
})
export class SimpleTinyComponent implements AfterViewInit, OnDestroy {
    @Input() elementId: String;
    @Output() onEditorKeyup = new EventEmitter<any>();

    private editor;

    ngAfterViewInit() {
        tinymce.init({
            selector: '#' + this.elementId,
            plugins: ['textcolor', 'link', 'paste', 'table', 'colorpicker'],
            toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons',
            skin_url: '../../assets/skins/lightgray',
            setup: editor => {
                this.editor = editor;
            },
        });
    }

    ngOnDestroy() {
        tinymce.remove(this.editor);
    }

    public getContent(): any {
        return this.editor.getContent();
    }
}