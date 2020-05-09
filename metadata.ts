import 'reflect-metadata';

@logSpecification
class Plane {
  name: string = 'Boeing 777';

  @specification('777-300ER')
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

function specification(model: string): Function {
  return function(target: any, key: string): void {
    Reflect.defineMetadata('model', model, target, key);
  };
}
