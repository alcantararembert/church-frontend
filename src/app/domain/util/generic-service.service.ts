import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GenericService {
	public http: HttpClient;
	public headers: HttpHeaders;
	public url: string = 'http://localhost:8080/';
	constructor(http: HttpClient) {
		this.http = http;
		this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
	}
	post(path: string, data: any): Observable<any> {
		const apiUrl = this.url.concat(path);
		return this.http.post(apiUrl, JSON.stringify(data), { headers: this.headers });
	}
	get(path: string): Observable<any> {
		const apiUrl = this.url.concat(path);
		return this.http.get(apiUrl, { headers: this.headers });
	}
}