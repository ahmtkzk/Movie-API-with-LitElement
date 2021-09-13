package com.ahmtkzk.MovieAPI.Services;

import com.ahmtkzk.MovieAPI.Models.Film.Film;
import com.ahmtkzk.MovieAPI.Repo.repoForJPA;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class filmService {

    private repoForJPA repo;

    //Tüm filmleri çekme
    public List<Film> getAllFilms() {
        return (List<Film>) repo.findAll();
    }

    //ID'ye göre silme
    public void deleteFilm(String id) {
        repo.deleteById(id);
    }

    //Film ekleme
    public void insertFilm(Film film) {
        repo.save(film);
    }
}
