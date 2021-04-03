import { Component, OnInit } from '@angular/core';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  githubIcon = faGithubSquare

  constructor() { }

  ngOnInit(): void {
  }

}