import { Component,Output,EventEmitter,Input, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  public childMessage = 'Form Child Componenet';
  @Output() public OutputChildMessageEmiiter=new EventEmitter();
  @Input() public inputForChildBowl:any;
  
 public funChildMessage(data:string){
  this.OutputChildMessageEmiiter.emit(data);
 }
}
