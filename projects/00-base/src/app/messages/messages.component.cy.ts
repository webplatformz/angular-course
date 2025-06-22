import { MessageService } from "../message.service";
import { MessagesComponent } from "./messages.component";

describe('MessagesComponent.name', () => {
  it('renders the component', () => {
    const messageService = new MessageService();
    messageService.messages=['foo'];

    cy.mount(MessagesComponent, {
      providers: [{ provide: MessageService, useValue: messageService }],
    });

    cy.contains('foo')

    cy.contains('Clear messages').click()

    cy.contains('foo').should('not.exist')
});
