import { GenericService } from '../util/generic-service.service';
import { Injectable } from '@angular/core';
import { Faithful } from './faithful';
import { Observable } from 'rxjs';

@Injectable()
export class FaithfulService extends GenericService {

	createFaithful(faithful: Faithful): Observable<any> {
		return this.post('faithfulExternal', faithful);
	}
}