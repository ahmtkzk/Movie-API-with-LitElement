package com.ahmtkzk.MovieAPI.Models.Film;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "filmler")
public class Film {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private String id;
    @Column(name = "filmadi")
    private String filmAdi;
    @Column(name = "yonetmen")
    private String yonetmen;
    @Column(name = "yil")
    private String tarih;
    @Column(name = "oyuncular")
    private String oyuncular;
    @Column(name = "ozet")
    private String ozet;
    @Column(name = "turler")
    private String turler;

    public Film(String filmAdi, String yonetmen, String tarih, String oyuncular, String ozet, String turler) {
        this.filmAdi = filmAdi;
        this.yonetmen = yonetmen;
        this.tarih = tarih;
        this.oyuncular = oyuncular;
        this.ozet = ozet;
        this.turler = turler;
    }

}
