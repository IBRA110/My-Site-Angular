import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

	messages = []
	pSub: Subscription
	rSub: Subscription


	constructor(
		private messageServ: MessageService
	) { }

  ngOnInit(){
		this.pSub = this.messageServ.getAll().subscribe(messages => {
			this.messages = messages
		})
  }

	ngOnDesroy(){
		if (this.pSub){
			this.pSub.unsubscribe()
		}

		if (this.rSub){
			this.rSub.unsubscribe()
		}
	}

	remove(id){
		this.rSub = this.messageServ.remove(id).subscribe(() => {
			this.messages = this.messages.filter(message => message.id != id)
		})
	}

}
