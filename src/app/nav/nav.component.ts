import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(private modalService: ModalService) {}
  openModal($event: MouseEvent) {
    $event.preventDefault();
    this.modalService.toggleModal('auth');
  }

  isModalOpen() {
    return this.modalService.isModalOpen('auth');
  }
}
