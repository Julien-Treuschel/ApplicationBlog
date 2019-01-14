import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() articleTitle: string;
  @Input() articleContent: string;
  @Input() articleLoveIts: number;
  @Input() articleDontLoveIts: number;
  @Input() articleCreated: Date;

  getColor() {
    if(this.articleLoveIts > this.articleDontLoveIts) {
      return 'green';
    } else if(this.articleDontLoveIts > this.articleLoveIts) {
      return 'red';
    }
}

love(){
this.articleLoveIts++
console.log(this.articleLoveIts);
}

dontLove(){
this.articleDontLoveIts++
console.log(this.articleDontLoveIts);
}

}
