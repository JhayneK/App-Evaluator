package com.example.buyme

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

data class Company(val name: String, val votes: Int, val avatar: Int)

class CompanyAdapter(private val companies: List<Company>) :
    RecyclerView.Adapter<CompanyAdapter.ViewHolder>() {

    class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val avatar: ImageView = view.findViewById(R.id.company_avatar)
        val name: TextView = view.findViewById(R.id.company_name)
        val voted: TextView = view.findViewById(R.id.company_voted)
        val votes: TextView = view.findViewById(R.id.company_votes)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_company, parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val company = companies[position]
        holder.avatar.setImageResource(company.avatar)
        holder.name.text = company.name
        holder.voted.text = "Item votado"
        holder.votes.text = company.votes.toString()
    }

    override fun getItemCount(): Int = companies.size
}

