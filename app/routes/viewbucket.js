import Route from '@ember/routing/route';

export default class ViewRoute extends Route {
  async model() {
    let res = await fetch('http://localhost:5001/api/v1/view');
    let data = await res.json();
    return data.data;
  }
}
