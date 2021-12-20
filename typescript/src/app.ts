// Code goes here!
class ProjectInput {
   templateElement: HTMLTemplateElement;
   hostElement: HTMLDivElement;
   element: HTMLFormElement;
   constructor() {
      this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
      this.hostElement = document.getElementById('app')! as HTMLDivElement;

      const importedNode = document.importNode(this.templateElement.content, true);
      this.element = importedNode.firstElementChild as HTMLFormElement;
      this.attach(this.element);
   }

   private attach(attachment: HTMLElement) {
      this.hostElement.insertAdjacentElement('afterbegin', attachment);
   }
}

const prjInput = new ProjectInput();
