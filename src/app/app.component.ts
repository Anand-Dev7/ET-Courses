import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ET-courses';

  course = {
    name: 'Advanced Computer Science',
    description: 'This course covers advanced topics in computer science, including algorithms, data structures, and machine learning.',
    curriculum: [
      'Introduction to Algorithms',
      'Data Structures in C++',
      'Introduction to Machine Learning',
      'Deep Learning Fundamentals'
    ],
    instructors: [
      { name: 'Dr. John Doe', specialization: 'Algorithms' },
      { name: 'Prof. Jane Smith', specialization: 'Machine Learning' }
    ],
    reviews: [
      { user: 'Alice', comment: 'Excellent course! Learned a lot.' },
      { user: 'Bob', comment: 'Very challenging but rewarding.' }
    ]
  };
}
