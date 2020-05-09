import 'reflect-metadata';

class Plane {
  name: string = 'Boeing 777';

  pilot(): void {
    console.log('Plane is flying');
  }
}

function logSpecification(target: typeof Plane): void {
  for (let property in target.prototype) {
    const model = Reflect.getMetadata('model', target.prototype, property);

    console.log(`model: ${model}`);
  }
}
