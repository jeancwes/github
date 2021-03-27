import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  @Input() opened: boolean;
  @Output() openedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {}

  close() {
    this.opened = false;
    this.openedChange.emit(this.opened);
  }

}
