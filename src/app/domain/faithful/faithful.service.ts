import { GenericService } from '../util/generic-service.service';
import { Injectable } from '@angular/core';
import { Faithful } from './faithful';

@Injectable()
export class FaithfulService extends GenericService {

    public createFaithful(faithful: Faithful) {
        this.post('faithfulExternal', faithful).subscribe(
            (resp) => {
                console.log('Post Successful:', resp);
            },
            (error) => {
                console.error('Post Error:', error);
        });
    }
}