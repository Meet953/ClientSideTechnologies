
public class Treble extends Data {

	int value3;
	
	public Treble(int v1, int v2, int v3) {
	
		super(v1, v2);
		value3 = v3;
	}

	int Add() {
		return value1 + value2 + value3;
	}
	
	boolean All_Even() {
		if(value1 % 2 == 0 && value2 % 2 == 0 && value3 % 2 == 0) {
			return true;
		}
		return false;
	}
}
