import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() modalId: string = '';

  constructor(public modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.register(this.modalId);
  }

  closeModal() {
    this.modalService.toggleModal(this.modalId);
  }
}
