import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ET-courses';
  selectedTab = 'home'; 
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // Listen for route changes and update selectedTab based on the current route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path;
      
      if (currentRoute) {
        this.selectedTab = currentRoute;  // Match the route path with the tab
      }
    });
  }

  // Method to handle tab selection
  selectTab(tab: string) {
    this.selectedTab = tab;

    // Navigate to corresponding route if needed
    if (tab === 'home') {
      this.router.navigate(['/']);
    } else if (tab === 'courses') {
      this.router.navigate(['/courses']);
    } else if (tab === 'instructors') {
      this.router.navigate(['/instructors']);
    } else if (tab === 'reviews') {
      this.router.navigate(['/reviews']);
    }
  }
}
