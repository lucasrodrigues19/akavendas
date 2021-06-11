package br.com.akasystem.akavendas.entities.dto;

import java.io.Serializable;
import java.time.LocalDate;

import br.com.akasystem.akavendas.entities.SaleAK;
import br.com.akasystem.akavendas.entities.SellerAK;
import br.com.akasystem.akavendas.entities.dto.main.MainDTOAK;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class SaleDTOAK extends MainDTOAK implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer visited;
	private Integer deals;
	private Double amount;
	private LocalDate date;
	private Long saller_id;
	private SellerDTOAK sellerDTOAK;

	public SaleDTOAK(SaleAK entity) {
		super();
		this.visited =entity.getVisited();
		this.deals = entity.getDeals();
		this.amount = entity.getAmount();
		this.date = entity.getDate();
		this.saller_id = entity.getId();
		sellerDTOAK = new SellerDTOAK(entity.getSeller());
	}
	
	
}
