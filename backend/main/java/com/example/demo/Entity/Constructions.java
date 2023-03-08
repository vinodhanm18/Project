package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Constructions")
public class Constructions
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	@Column(name="CustomerName")
	private String Cname;
	@Column(name="CustomerAddress")
	private String Caddress;
	@Column(name="SiteNumber")
	private int Siteno;
	@Column(name="GSTNumber")
	private String GST;
	@Column(name="Area")
	private int Area;
	public int getid() {
		return id;
	} 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	public void setid(int id) {
		this.id = id;
	}
	public String getCustomername() {
		return Cname;
	}
	public void setCustomername(String Cname) {
		this.Cname = Cname;
	}
	public String getCustomerAddress() {
		return Caddress;
	}
	public void setCustomerAddress(String CAddress) {
		this.Caddress = CAddress;
	}
	public int getSiteNumber() {
		return Siteno;
	}
	public void setSiteNumber(int Siteno) {
		this.Siteno = Siteno;
	}
	public int getArea() {
		return Area;
	}
	public void setArea(int Area) {
		this.Area = Area;
	}
	public String getGSTNumber() {
		return GST;
	}
	public void setGSTNumber(String GST) {
		this.GST = GST;
	}
	public Constructions(int id, String Cname, String Caddress, int Siteno, String GST) {
		super();
		this.id = id;
		this.Cname = Cname;
		this.Caddress = Caddress;
		this.Siteno = Siteno;
		this.GST = GST;
	}
	public Constructions() {}
	
	
}