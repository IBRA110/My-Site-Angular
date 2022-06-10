import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { FbResponse } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

	constructor(
		private http: HttpClient
	) { }

	create(message){
		console.log(message)
		return this.http.post(`${environment.fbDbUrl}/messages.json`, message)
		.pipe(map((res: FbResponse) => {
			return {
				...message,
				id: res.name,
				date: new Date(message.date)
			}
		}))
	}
  
	getAll() {
    return this.http.get(`${environment.fbDbUrl}/messages.json`)
    .pipe(map(res => {
      return Object.keys(res)
      .map(key => ({
        ...res[key],
        id: key,
        date: new Date(res[key].date)
      }))
    }))
  }
	
	remove(id){
		return this.http.delete(`${environment.fbDbUrl}/messages/${id}.json`)
	}
}

