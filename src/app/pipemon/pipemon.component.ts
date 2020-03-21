import { PipelineService } from './../pipeline.service';
import { PIPELINES } from './../mockpipelines';
import { Component, OnInit, ConstructorSansProvider } from '@angular/core';
import { Pipeline } from '../pipeline';

@Component({
  selector: 'app-pipemon',
  templateUrl: './pipemon.component.html',
  styleUrls: ['./pipemon.component.css']
})
export class PipemonComponent implements OnInit {

  pipelines: Pipeline[];
  selectedPipeline: Pipeline;

  constructor(private PipelineService: PipelineService) {

  }

  ngOnInit(): void {
    this.getPipelines();
  }

  onSelect(pipeline: Pipeline): void{
    this.selectedPipeline = pipeline;
  }

  getPipelines(): void{
    this.PipelineService.getPipelines().subscribe(pipelines=>this.pipelines=pipelines);
  }

}
