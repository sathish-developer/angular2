import { Injectable } from '@angular/core';
@Injectable()
export class StorageService{


 public formData:any={};


  get(key){     
	    return this.formData[key];
	}
	 getAll(){     
	    return this.formData;
	}
	 set(key, value){
		this.formData[key] = value;
	}
	
	 remove(key){
		
	}
	 removeAll(){
		this.formData = {};
	}

}