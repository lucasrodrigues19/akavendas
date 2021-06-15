package br.com.akasystem.akavendas.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import br.com.akasystem.akavendas.entities.main.EntityMain;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="tb_sellers")
public class SellerAK  extends EntityMain{

	private String name;
	
	@OneToMany(mappedBy = "seller")
	private List<SaleAK> sales;
	
}
