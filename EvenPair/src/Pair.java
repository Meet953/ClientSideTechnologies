
public class Pair extends Data {

	public Pair(int v1, int v2) {
		 
		super(v1,v2);
	}

	int Add() {
		return value1 + value2;
	}
	
	boolean All_Even() {
		if(value1 % 2 == 0 && value2 % 2 == 0) {
			return true;
		}
		return false;
	}
}
