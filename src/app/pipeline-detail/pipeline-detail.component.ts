import { Pipeline } from './../pipeline';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pipeline-detail',
  templateUrl: './pipeline-detail.component.html',
  styleUrls: ['./pipeline-detail.component.css']
})
export class PipelineDetailComponent implements OnInit {

  @Input() pipeline: Pipeline;

  constructor() { }

  ngOnInit(): void {
  }

}
