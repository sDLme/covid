import { Component, OnInit } from '@angular/core';

/// service
import { ConsoleService } from '../../../core/services/console.service';

@Component({
  selector: 'app-showing-author',
  templateUrl: './showing-author.component.html',
  styleUrls: ['./showing-author.component.scss']
})
export class ShowingAuthorComponent implements OnInit {
  public author = 'Author';

  constructor(
    private consoleLog: ConsoleService
  ) {}

  ngOnInit(): void {
    this.consoleLog.log(this.author);
  }

}
