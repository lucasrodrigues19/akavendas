package br.com.akasystem.akavendas.entities.dto;

import java.io.Serializable;

import br.com.akasystem.akavendas.entities.SellerAK;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@NoArgsConstructor
@Getter
@Setter
public class SaleSumDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String sellerName;
	private Double sum;
	
	
	public SaleSumDTO(SellerAK seller,Double sum) {
		log.info("Passo o seller como parametro por que no postgres por que preciso agrupar por seller e não pelo nome");
		this.sellerName = seller.getName();
		this.sum =  sum;
	}
}
