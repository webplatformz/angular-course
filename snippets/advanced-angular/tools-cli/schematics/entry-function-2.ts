import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function helloWorld(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.create('hello-world.html', `<h1> Hello world 👋</h1>`);
    return tree;
  };
}
