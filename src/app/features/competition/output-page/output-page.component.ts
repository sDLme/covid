import { Component, OnInit } from '@angular/core';

//components
import { CompetitionModule } from '../competition.module';
import { Rider } from '../rider.model';
import { CompetitionService } from '../competition.service';


@Component({
  selector: 'app-output-page',
  templateUrl: './output-page.component.html',
  styleUrls: ['./output-page.component.scss']
})
export class OutputPageComponent implements OnInit {

  public membersList: Rider[];

  constructor( private ridersList : CompetitionService) { }

  ngOnInit(): void {
    this.membersList = this.ridersList.getRiders();

    console.log(this.membersList);
  }

}
