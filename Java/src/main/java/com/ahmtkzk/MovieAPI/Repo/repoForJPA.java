package com.ahmtkzk.MovieAPI.Repo;

import com.ahmtkzk.MovieAPI.Models.Film.Film;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public interface repoForJPA extends CrudRepository <Film, String>{
}
