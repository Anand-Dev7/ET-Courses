import { Component, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  @ViewChild('tabGroup') tabGroup: MatTabGroup | undefined;

  constructor(private router: Router) {}

  // Methods for navigating to different pages
  navigateToCourses() {
    this.router.navigate(['/courses']); // Adjust the path according to your app's routing
  
    setTimeout(() => {
      if (this.tabGroup) {
        this.tabGroup.selectedIndex = 1; // Index 1 corresponds to the 'Courses' tab
      }
    }, 0);
  }

  navigateToSignUp() {
    this.router.navigate(['/sign-up']);
  }

  navigateToTestimonials() {
    this.router.navigate(['/testimonials']);
  }

  navigateToPricing() {
    this.router.navigate(['/pricing']);
  }

 
}
