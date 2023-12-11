import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FormComponent extends Component {
  @tracked bucketName = '';

  @action
  async createbucket(e) {
    e.preventDefault();

    const url = 'http://localhost:5001/api/v1/create';

    const data = {
      bucketName: this.bucketName,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Bucket Was Created Successfully');
        this.bucketName = '';
      } else {
        alert('Failed to create bucket:', response.statusText);
      }
    } catch (error) {
      alert('An error occurred:', error);
    }
  }
}
