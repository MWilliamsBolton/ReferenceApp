import { MessagesService } from './messages.service';
import { PIPELINES } from './mockpipelines';
import { Pipeline } from './pipeline';
import { Injectable, ConstructorSansProvider } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PipelineService {


  constructor(private messagesService: MessagesService) { }

  getPipelines(): Observable <Pipeline[]>{
    this.messagesService.add('PipelineService: fetched courses');
    return of (PIPELINES);
  }



}
