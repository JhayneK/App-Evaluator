package com.example.buyme

import android.os.Bundle
import android.widget.ImageView
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import com.example.buyme.NotificationsFragment
import com.example.buyme.R
import com.example.buyme.SettingsFragment
import com.example.buyme.StatsFragment
import com.example.buyme.WalletFragment
import com.google.android.material.bottomnavigation.BottomNavigationView
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.buyme.Company
import com.example.buyme.CompanyAdapter

class MainActivity : AppCompatActivity() {
//navigation menu
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val navView: BottomNavigationView = findViewById(R.id.bottom_navigation)
        navView.setOnNavigationItemSelectedListener { item ->
            when (item.itemId) {
                R.id.navigation_wallet -> {
                    loadFragment(WalletFragment())
                    return@setOnNavigationItemSelectedListener true
                }
                R.id.navigation_stats -> {
                    loadFragment(StatsFragment())
                    return@setOnNavigationItemSelectedListener true
                }
                R.id.navigation_notifications -> {
                    loadFragment(NotificationsFragment())
                    return@setOnNavigationItemSelectedListener true
                }
                R.id.navigation_settings -> {
                    loadFragment(SettingsFragment())
                    return@setOnNavigationItemSelectedListener true
                }
            }
            false
        }

        // Set default fragment
        loadFragment(WalletFragment())
        loadFragment(StatsFragment())
        loadFragment(NotificationsFragment())
        loadFragment(SettingsFragment())


    val companies = listOf(
        Company("Loja de Roupas", 12, R.drawable.ic_wallet),
        Company("Utensílios Domésticos", 10, R.drawable.ic_stats),
        Company("Loja de Móveis", 2, R.drawable.ic_notifications)
    )

    val recyclerView: RecyclerView = findViewById(R.id.recyclerView)
    recyclerView.layoutManager = LinearLayoutManager(this)
    recyclerView.adapter = CompanyAdapter(companies)
    }

    private fun loadFragment(fragment: Fragment) {
        supportFragmentManager.beginTransaction()
            .replace(R.id.container, fragment)
            .commit()
    }














}













