
public class ForeignStudent extends Student {

	String country_of_origin;
	
	public ForeignStudent(String name, int age, String country) {
		// TODO Auto-generated constructor stub
		super(name,age);
		country_of_origin = country;
	}

	public int readAge() {
		// TODO Auto-generated method stub
		return age;
	}

	public String readCountry() {
		// TODO Auto-generated method stub
		return country_of_origin;
	}

	public boolean changeAge(int newAge) {
		// TODO Auto-generated method stub
		if(age < newAge) {
			age = newAge;
			return true;
		}
		
		return false;
	}

	public boolean matureStudent() {
		// TODO Auto-generated method stub
		if(age > 22) {
			return true;
		}
		return false;
	}
	
	public void printDetails(){
       super.printDetails();
        System.out.println("Country:" + readCountry());
}
	
	
	
	

	 

}
